import { api } from "./api";

export const authapi = api.injectEndpoints({
    endpoints: (builder) => ({
        createProgram: builder.mutation({
            query: (data) => ({
                url: "/programs/add/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_users"],
        }),

        programUpdate: builder.mutation({
            query: (data) => {
                const id = data instanceof FormData ? data.get('id') : data.id;
                return {
                    url: `/programs/edit/${id}/`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: (result, error, arg) => {
                const id = arg instanceof FormData ? arg.get('id') : arg.id;
                return ["uni_users", { type: "Program", id }];
            },
        }),

        getAllPrograms: builder.query({
            query: () => "/programs/",
            providesTags: ["uni_users"],
        }),

        getProgramById: builder.query({
            query: (id) => `/program/${id}/`,
            providesTags: (result, error, id) => [{ type: "Program", id }],
        }),

        deleteProgram: builder.mutation({
            query: (id) => ({
                url: `/programs/delete/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => ["uni_users", { type: "Program", id }],
        }),
        createEvent: builder.mutation({
            query: (data) => ({
                url: "/events/create/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_users"],
        }),

        eventUpdate: builder.mutation({
            query: (data) => {
                const id = data instanceof FormData ? data.get('id') : data.id;
                return {
                    url: `/events/edit/${id}/`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: (result, error, arg) => {
                const id = arg instanceof FormData ? arg.get('id') : arg.id;
                return ["uni_users", { type: "Program", id }];
            },
        }),

        getAllEvents: builder.query({
            query: () => "/events/",
            providesTags: ["uni_users"],
        }),

        getEventById: builder.query({
            query: (id) => `/events/${id}/registrations/`,
            providesTags: (result, error, id) => [{ type: "Program", id }],
        }),

        deleteEvent: builder.mutation({
            query: (id) => ({
                url: `/events/cancel/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => ["uni_users", { type: "Program", id }],
        }),

        getUniversityProfile: builder.query({
            query: () => "/profile/",
            providesTags: ["uni_profile"],
        }),

        setupProfile: builder.mutation({
            query: (data) => ({
                url: "/profile/setup/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_profile"],
        }),
    }),
});

export const {
    useCreateProgramMutation,
    useGetAllProgramsQuery,
    useProgramUpdateMutation,
    useDeleteProgramMutation,
    useGetProgramByIdQuery,
    useGetUniversityProfileQuery,
    useSetupProfileMutation,
    useCreateEventMutation,
    useGetAllEventsQuery,
    useGetEventByIdQuery,
    useDeleteEventMutation,
    useEventUpdateMutation,
} = authapi;
