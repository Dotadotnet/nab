

const { nabApi } = require("../nab");

const paymentApi = nabApi.injectEndpoints({
  endpoints: (build) => ({
    // create payment
    createPayment: build.mutation({
      query: (body) => ({
        url: "/payment/create-payment",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
