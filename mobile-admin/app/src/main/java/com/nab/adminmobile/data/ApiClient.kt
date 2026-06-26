package com.nab.adminmobile.data

import android.content.Context
import com.nab.adminmobile.BuildConfig
import kotlinx.serialization.json.Json
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.kotlinx.serialization.asConverterFactory

class TokenStore(context: Context) {
    private val prefs = context.getSharedPreferences("nab_admin_mobile", Context.MODE_PRIVATE)

    var token: String?
        get() = prefs.getString("token", null)
        set(value) = prefs.edit().putString("token", value).apply()

    fun clear() {
        prefs.edit().clear().apply()
    }
}

object ApiClient {
    fun create(context: Context): Pair<AdminApi, TokenStore> {
        val tokenStore = TokenStore(context)
        val json = Json {
            ignoreUnknownKeys = true
        }
        val logging = HttpLoggingInterceptor().apply {
            level = HttpLoggingInterceptor.Level.BASIC
        }
        val client = OkHttpClient.Builder()
            .addInterceptor { chain ->
                val requestBuilder = chain.request().newBuilder()
                tokenStore.token?.let { requestBuilder.addHeader("Authorization", "Bearer $it") }
                chain.proceed(requestBuilder.build())
            }
            .addInterceptor(logging)
            .build()

        val retrofit = Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .client(client)
            .addConverterFactory(json.asConverterFactory("application/json".toMediaType()))
            .build()

        return retrofit.create(AdminApi::class.java) to tokenStore
    }
}
