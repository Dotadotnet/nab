package com.nab.adminmobile.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.nab.adminmobile.data.AdminRepository
import com.nab.adminmobile.model.AppNotification
import com.nab.adminmobile.model.ChatMessage
import com.nab.adminmobile.model.Order
import com.nab.adminmobile.model.Ticket
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class AdminUiState(
    val loading: Boolean = false,
    val loggedIn: Boolean = false,
    val error: String? = null,
    val orders: List<Order> = emptyList(),
    val tickets: List<Ticket> = emptyList(),
    val notifications: List<AppNotification> = emptyList(),
    val unreadNotifications: Int = 0,
    val selectedTicket: Ticket? = null,
    val messages: List<ChatMessage> = emptyList()
)

class AdminViewModel(private val repository: AdminRepository) : ViewModel() {
    private val _state = MutableStateFlow(AdminUiState(loggedIn = repository.isLoggedIn))
    val state: StateFlow<AdminUiState> = _state

    init {
        if (repository.isLoggedIn) refreshDashboard()
    }

    fun login(email: String, password: String) = runLoading {
        repository.login(email, password)
        _state.update { it.copy(loggedIn = true) }
        refreshDashboard()
    }

    fun logout() {
        repository.logout()
        _state.value = AdminUiState(loggedIn = false)
    }

    fun refreshDashboard() = runLoading {
        val notifications = repository.notifications()
        _state.update {
            it.copy(
                orders = repository.orders(),
                tickets = repository.tickets(),
                notifications = notifications.notifications,
                unreadNotifications = notifications.unread
            )
        }
    }

    fun openTicket(ticket: Ticket) = runLoading {
        val payload = repository.messages(ticket.id)
        _state.update {
            it.copy(
                selectedTicket = payload.ticket,
                messages = payload.messages
            )
        }
    }

    fun closeChat() {
        _state.update { it.copy(selectedTicket = null, messages = emptyList()) }
    }

    fun sendMessage(body: String) = runLoading {
        val ticket = _state.value.selectedTicket ?: return@runLoading
        repository.sendMessage(ticket.id, body)
        val payload = repository.messages(ticket.id)
        _state.update { it.copy(messages = payload.messages) }
    }

    private fun runLoading(block: suspend () -> Unit) {
        viewModelScope.launch {
            _state.update { it.copy(loading = true, error = null) }
            try {
                block()
            } catch (error: Throwable) {
                _state.update { it.copy(error = error.message ?: "خطای نامشخص") }
            } finally {
                _state.update { it.copy(loading = false) }
            }
        }
    }
}
