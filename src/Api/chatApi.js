import { api } from "./api";

export const chatApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: () => "/conversations/list/",
            providesTags: ["Conversations"],
        }),
        getChatHistory: builder.query({
            query: (id) => `/chat/history/${id}/`,
            providesTags: (result, error, id) => [{ type: "ChatHistory", id }],
        }),
    }),
});

export const { useGetConversationsQuery, useGetChatHistoryQuery } = chatApi;
