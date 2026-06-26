package com.nab.adminmobile.model

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class ApiEnvelope<T>(
    val acknowledgement: Boolean = false,
    val message: String = "",
    val description: String? = null,
    val accessToken: String? = null,
    val data: T? = null,
    val total: Int? = null
)

@Serializable
data class SignInRequest(
    val email: String,
    val password: String
)

@Serializable
data class MessageRequest(
    val body: String
)

@Serializable
data class AdminProfile(
    @SerialName("_id") val id: String = "",
    val name: String? = null,
    val email: String? = null,
    val role: String? = null
)

@Serializable
data class Customer(
    @SerialName("_id") val id: String = "",
    val name: String? = null,
    val phone: String? = null,
    val email: String? = null
)

@Serializable
data class PurchaseSummary(
    @SerialName("_id") val id: String = "",
    val totalAmountWithDiscount: Long? = null,
    val totalAmountWithoutDiscount: Long? = null
)

@Serializable
data class Order(
    @SerialName("_id") val id: String = "",
    val orderId: String = "",
    val orderStatus: String = "",
    val paymentRefId: String? = null,
    val customer: Customer? = null,
    val purchase: PurchaseSummary? = null,
    val createdAt: String? = null
)

@Serializable
data class Ticket(
    @SerialName("_id") val id: String = "",
    val ticketId: String = "",
    val subject: String = "",
    val status: String = "",
    val priority: String = "",
    val customer: Customer? = null,
    val lastMessageAt: String? = null,
    val createdAt: String? = null
)

@Serializable
data class Sender(
    @SerialName("_id") val id: String = "",
    val name: String? = null,
    val email: String? = null,
    val phone: String? = null,
    val role: String? = null
)

@Serializable
data class ChatMessage(
    @SerialName("_id") val id: String = "",
    val senderModel: String = "",
    val sender: Sender? = null,
    val body: String = "",
    val createdAt: String? = null
)

@Serializable
data class ChatPayload(
    val ticket: Ticket,
    val messages: List<ChatMessage> = emptyList()
)

@Serializable
data class AppNotification(
    @SerialName("_id") val id: String = "",
    val type: String = "",
    val title: String = "",
    val body: String? = null,
    val readAt: String? = null,
    val createdAt: String? = null
)

@Serializable
data class NotificationPayload(
    val notifications: List<AppNotification> = emptyList(),
    val unread: Int = 0
)
