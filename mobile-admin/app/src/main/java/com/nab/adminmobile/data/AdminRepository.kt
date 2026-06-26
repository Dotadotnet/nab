package com.nab.adminmobile.data

import com.nab.adminmobile.model.*

class AdminRepository(
    private val api: AdminApi,
    private val tokenStore: TokenStore
) {
    val isLoggedIn: Boolean get() = !tokenStore.token.isNullOrBlank()

    suspend fun login(email: String, password: String) {
        val response = api.signIn(SignInRequest(email, password))
        val token = response.accessToken
        require(response.acknowledgement && !token.isNullOrBlank()) {
            response.description ?: "ورود ناموفق بود"
        }
        tokenStore.token = token
    }

    fun logout() = tokenStore.clear()

    suspend fun me(): AdminProfile = api.me().data ?: AdminProfile()

    suspend fun orders(): List<Order> = api.orders().data.orEmpty()

    suspend fun tickets(): List<Ticket> = api.tickets().data.orEmpty()

    suspend fun messages(ticketId: String): ChatPayload =
        api.messages(ticketId).data ?: error("پیام‌ها دریافت نشدند")

    suspend fun sendMessage(ticketId: String, body: String): ChatMessage =
        api.sendMessage(ticketId, MessageRequest(body)).data ?: error("ارسال پیام ناموفق بود")

    suspend fun notifications(): NotificationPayload =
        api.notifications().data ?: NotificationPayload()
}
