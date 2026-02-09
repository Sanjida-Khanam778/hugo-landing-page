import { api } from "./api";

export const chatApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query({
            query: () => "/conversations/list/",
            providesTags: ["Conversations"],
        }),
        getAIChatHistory: builder.query({
            query: () => "/chat-history-list/",
            providesTags: ["AIChatHistory"],
        }),
        getChatHistory: builder.query({
            query: (id) => `/chat/history/${id}/`,
            providesTags: (result, error, id) => [{ type: "ChatHistory", id }],
        }),
        getAISessionHistory: builder.query({
            query: (id) => `/chat-history/${id}/`,
        }),
        getOrCreateRoom: builder.mutation({
            query: (id) => ({
                url: `/chat/get-or-create-room/${id}/`,
                method: "POST",
            }),
            invalidatesTags: ["Conversations"],
        }),
    }),
});

export const { useGetConversationsQuery, useGetChatHistoryQuery, useGetOrCreateRoomMutation, useGetAIChatHistoryQuery, useGetAISessionHistoryQuery, useLazyGetAISessionHistoryQuery } = chatApi;
