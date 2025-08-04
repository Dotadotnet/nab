

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
     completeOrder: build.mutation({
      query: ({ id, body}) => ({
        url: `/payment/completeOrder/${id}`,
        method: "POST",
        body, 
      }),
    }),

  }),
});

export const { useCreatePaymentMutation, useCompleteOrderMutation } = paymentApi;
