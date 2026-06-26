package com.nab.adminmobile

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.nab.adminmobile.data.AdminRepository
import com.nab.adminmobile.data.ApiClient
import com.nab.adminmobile.model.AppNotification
import com.nab.adminmobile.model.ChatMessage
import com.nab.adminmobile.model.Order
import com.nab.adminmobile.model.Ticket
import com.nab.adminmobile.ui.AdminUiState
import com.nab.adminmobile.ui.AdminViewModel

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val (api, tokenStore) = ApiClient.create(this)
        val repository = AdminRepository(api, tokenStore)

        setContent {
            MaterialTheme {
                Surface(modifier = Modifier.fillMaxSize()) {
                    val vm: AdminViewModel = viewModel(factory = SimpleVmFactory { AdminViewModel(repository) })
                    AdminApp(vm)
                }
            }
        }
    }
}

@Composable
private fun AdminApp(vm: AdminViewModel) {
    val state by vm.state.collectAsState()

    if (!state.loggedIn) {
        LoginScreen(state, vm::login)
        return
    }

    state.selectedTicket?.let {
        ChatScreen(
            state = state,
            onBack = vm::closeChat,
            onSend = vm::sendMessage
        )
        return
    }

    DashboardScreen(
        state = state,
        onLogout = vm::logout,
        onRefresh = vm::refreshDashboard,
        onOpenTicket = vm::openTicket
    )
}

@Composable
private fun LoginScreen(
    state: AdminUiState,
    onLogin: (String, String) -> Unit
) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.Center
    ) {
        Text("mobile", style = MaterialTheme.typography.headlineMedium)
        Spacer(Modifier.height(20.dp))
        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("ایمیل") },
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(Modifier.height(10.dp))
        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("رمز عبور") },
            visualTransformation = PasswordVisualTransformation(),
            modifier = Modifier.fillMaxWidth()
        )
        Spacer(Modifier.height(16.dp))
        Button(
            onClick = { onLogin(email.trim(), password) },
            modifier = Modifier.fillMaxWidth(),
            enabled = !state.loading
        ) {
            Text("ورود ادمین")
        }
        StatusLine(state)
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun DashboardScreen(
    state: AdminUiState,
    onLogout: () -> Unit,
    onRefresh: () -> Unit,
    onOpenTicket: (Ticket) -> Unit
) {
    var tab by remember { mutableIntStateOf(0) }
    val tabs = listOf("سفارش‌ها", "تیکت‌ها", "اعلان‌ها")

    Scaffold(
        topBar = {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(12.dp),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("پنل موبایل ادمین", style = MaterialTheme.typography.titleLarge)
                Row {
                    TextButton(onClick = onRefresh) { Text("بروزرسانی") }
                    TextButton(onClick = onLogout) { Text("خروج") }
                }
            }
        },
        bottomBar = {
            NavigationBar {
                tabs.forEachIndexed { index, title ->
                    NavigationBarItem(
                        selected = tab == index,
                        onClick = { tab = index },
                        label = { Text(title) },
                        icon = {}
                    )
                }
            }
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .padding(horizontal = 12.dp)
        ) {
            StatusLine(state)
            when (tab) {
                0 -> OrdersList(state.orders)
                1 -> TicketsList(state.tickets, onOpenTicket)
                2 -> NotificationsList(state.notifications, state.unreadNotifications)
            }
        }
    }
}

@Composable
private fun OrdersList(orders: List<Order>) {
    LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        items(orders) { order ->
            Card(modifier = Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(order.orderId, style = MaterialTheme.typography.titleMedium)
                    Text("وضعیت: ${order.orderStatus}")
                    Text("مشتری: ${order.customer?.name ?: order.customer?.phone ?: "-"}")
                    Text("مبلغ: ${order.purchase?.totalAmountWithDiscount ?: order.purchase?.totalAmountWithoutDiscount ?: 0}")
                }
            }
        }
    }
}

@Composable
private fun TicketsList(tickets: List<Ticket>, onOpenTicket: (Ticket) -> Unit) {
    LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
        items(tickets) { ticket ->
            Card(modifier = Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text("${ticket.ticketId} - ${ticket.subject}", style = MaterialTheme.typography.titleMedium)
                    Text("وضعیت: ${ticket.status} | اولویت: ${ticket.priority}")
                    Text("کاربر: ${ticket.customer?.name ?: ticket.customer?.phone ?: "-"}")
                    Spacer(Modifier.height(8.dp))
                    Button(onClick = { onOpenTicket(ticket) }) {
                        Text("مشاهده چت")
                    }
                }
            }
        }
    }
}

@Composable
private fun NotificationsList(items: List<AppNotification>, unread: Int) {
    Column {
        Text("خوانده نشده: $unread", style = MaterialTheme.typography.titleMedium)
        Spacer(Modifier.height(8.dp))
        LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            items(items) { item ->
                Card(modifier = Modifier.fillMaxWidth()) {
                    Column(Modifier.padding(12.dp)) {
                        Text(item.title, style = MaterialTheme.typography.titleMedium)
                        Text(item.body ?: "")
                        Text(if (item.readAt == null) "جدید" else "خوانده شده")
                    }
                }
            }
        }
    }
}

@Composable
private fun ChatScreen(
    state: AdminUiState,
    onBack: () -> Unit,
    onSend: (String) -> Unit
) {
    var message by remember { mutableStateOf("") }
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(12.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(state.selectedTicket?.subject ?: "چت", style = MaterialTheme.typography.titleLarge)
            OutlinedButton(onClick = onBack) { Text("بازگشت") }
        }
        StatusLine(state)
        LazyColumn(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth(),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            items(state.messages) { item ->
                MessageBubble(item)
            }
        }
        Row(Modifier.fillMaxWidth()) {
            OutlinedTextField(
                value = message,
                onValueChange = { message = it },
                label = { Text("پیام") },
                modifier = Modifier.weight(1f)
            )
            Button(
                onClick = {
                    if (message.isNotBlank()) {
                        onSend(message.trim())
                        message = ""
                    }
                },
                modifier = Modifier.padding(start = 8.dp)
            ) {
                Text("ارسال")
            }
        }
    }
}

@Composable
private fun MessageBubble(item: ChatMessage) {
    Card(modifier = Modifier.fillMaxWidth()) {
        Column(Modifier.padding(10.dp)) {
            Text(
                text = if (item.senderModel == "Admin") "ادمین" else "کاربر",
                style = MaterialTheme.typography.labelLarge
            )
            Text(item.body)
        }
    }
}

@Composable
private fun StatusLine(state: AdminUiState) {
    if (state.loading) {
        Row(Modifier.padding(top = 10.dp)) {
            CircularProgressIndicator()
            Text("در حال دریافت...", modifier = Modifier.padding(start = 12.dp))
        }
    }
    state.error?.let {
        Text(it, color = MaterialTheme.colorScheme.error, modifier = Modifier.padding(top = 10.dp))
    }
}
