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
        deleteAIChatSession: builder.mutation({
            query: (id) => ({
                url: `/delete/chat/history/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["AIChatHistory"],
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

export const { useGetConversationsQuery, useGetChatHistoryQuery, useGetOrCreateRoomMutation, useGetAIChatHistoryQuery, useGetAISessionHistoryQuery, useLazyGetAISessionHistoryQuery, useDeleteAIChatSessionMutation } = chatApi;
