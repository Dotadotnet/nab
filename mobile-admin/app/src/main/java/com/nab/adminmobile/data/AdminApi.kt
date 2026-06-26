package com.nab.adminmobile.data

import com.nab.adminmobile.model.*
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.PATCH
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

interface AdminApi {
    @POST("admin/sign-in")
    suspend fun signIn(@Body body: SignInRequest): ApiEnvelope<Unit>

    @GET("admin/me")
    suspend fun me(): ApiEnvelope<AdminProfile>

    @GET("order/get-orders")
    suspend fun orders(
        @Query("page") page: Int = 1,
        @Query("limit") limit: Int = 20,
        @Query("search") search: String = ""
    ): ApiEnvelope<List<Order>>

    @GET("support/tickets")
    suspend fun tickets(
        @Query("page") page: Int = 1,
        @Query("limit") limit: Int = 30,
        @Query("status") status: String = "all"
    ): ApiEnvelope<List<Ticket>>

    @GET("support/tickets/{ticketId}/messages")
    suspend fun messages(@Path("ticketId") ticketId: String): ApiEnvelope<ChatPayload>

    @POST("support/tickets/{ticketId}/messages")
    suspend fun sendMessage(
        @Path("ticketId") ticketId: String,
        @Body body: MessageRequest
    ): ApiEnvelope<ChatMessage>

    @GET("notification/admin")
    suspend fun notifications(): ApiEnvelope<NotificationPayload>

    @PATCH("notification/admin/{id}/read")
    suspend fun markNotificationRead(@Path("id") id: String): ApiEnvelope<AppNotification>
}
