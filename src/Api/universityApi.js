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
        createJob: builder.mutation({
            query: (data) => ({
                url: "/post/job/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_users"],
        }),

        jobUpdate: builder.mutation({
            query: (data) => {
                const id = data instanceof FormData ? data.get('id') : data.id;
                return {
                    url: `/job/${id}/update/`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: (result, error, arg) => {
                const id = arg instanceof FormData ? arg.get('id') : arg.id;
                return ["uni_users", { type: "Program", id }];
            },
        }),

        getAllJobs: builder.query({
            query: () => "/jobs/",
            providesTags: ["uni_users"],
        }),

        getJobById: builder.query({
            query: (id) => `/jobs?job_id=${id}`,
            providesTags: (result, error, id) => [{ type: "Program", id }],
        }),

        deleteJob: builder.mutation({
            query: (id) => ({
                url: `/events/cancel/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => ["uni_users", { type: "Program", id }],
        }),

        getUniversityProfile: builder.query({
            query: () => "/profile/setup/",
            providesTags: ["uni_profile"],
        }),

        setupProfile: builder.mutation({
            query: (data) => ({
                url: "/profile/setup/",
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["uni_profile"],
        }),

        getAllUniversities: builder.query({
            query: (params) => {
                const searchParams = new URLSearchParams();
                if (params) {
                    Object.entries(params).forEach(([key, value]) => {
                        if (value) searchParams.append(key, value);
                    });
                }
                const queryString = searchParams.toString();
                return `/discovery/universities/${queryString ? `?${queryString}` : ""}`;
            },
            providesTags: ["uni_users"],
        }),

        getUniversityOverview: builder.query({
            query: (id) => `/university/overview/${id}/`,
            providesTags: (result, error, id) => [{ type: "University", id }],
        }),

        getProgramsByUniId: builder.query({
            query: (id) => `/get-programs/?univ_id=${id}`,
            providesTags: (result, error, id) => [{ type: "UniversityPrograms", id }],
        }),

        getProgramDetails: builder.query({
            query: (id) => `/program/${id}/`,
            providesTags: (result, error, id) => [{ type: "ProgramDetails", id }],
        }),

        getEventsByUniId: builder.query({
            query: (id) => `/get-events/?univ_id=${id}`,
            providesTags: (result, error, id) => [{ type: "UniversityEvents", id }],
        }),

        getJobsByUniId: builder.query({
            query: (id) => `/get-jobs/?univ_id=${id}`,
            providesTags: (result, error, id) => [{ type: "UniversityJobs", id }],
        }),

        getJobDetails: builder.query({
            query: (id) => `/get-jobs/${id}/`,
            providesTags: (result, error, id) => [{ type: "JobDetails", id }],
        }),

        getDashboardStats: builder.query({
            query: () => "/university/dashboard/stats/",
            providesTags: ["dashboard_stats"],
        }),

        addTestimonial: builder.mutation({
            query: (data) => ({
                url: "/testimonials/add/",
                method: "POST",
                body: data,
            }),
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
    useCreateJobMutation,
    useGetAllJobsQuery,
    useGetJobByIdQuery,
    useDeleteJobMutation,
    useJobUpdateMutation,
    useGetAllUniversitiesQuery,
    useGetUniversityOverviewQuery,
    useGetProgramsByUniIdQuery,
    useGetProgramDetailsQuery,
    useGetEventsByUniIdQuery,
    useGetJobsByUniIdQuery,
    useGetJobDetailsQuery,
    useGetDashboardStatsQuery,
    useAddTestimonialMutation,
} = authapi;
