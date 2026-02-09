import { api } from "./api";

export const aiApi = api.injectEndpoints({
    endpoints: (builder) => ({
        chatWithAI: builder.mutation({
            query: (data) => ({
                url: "/ai/chat/",
                method: "POST",
                body: data,
            }),
        }),
        voiceChatAI: builder.mutation({
            query: (formData) => ({
                url: "/ai/voice-chat/",
                method: "POST",
                body: formData,
            }),
        }),
    }),
});

export const { useChatWithAIMutation, useVoiceChatAIMutation } = aiApi;
