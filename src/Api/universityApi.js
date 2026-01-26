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
                url: `/job/${id}/delete/`,
                method: "DELETE",
            }),
            invalidatesTags: ["uni_users"],
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

        getDiscoveryPrograms: builder.query({
            query: (params) => ({
                url: "/get-programs/",
                params: params,
            }),
            providesTags: ["DiscoveryPrograms"],
        }),

        getProgramDetails: builder.query({
            query: (id) => `/program/detail/${id}/`,
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
            query: () => "/university/dashboard/statistics/",
            providesTags: ["dashboard_stats"],
        }),

        addTestimonial: builder.mutation({
            query: (data) => ({
                url: "/testimonials/add/",
                method: "POST",
                body: data,
            }),
        }),

        getDiscoveryEvents: builder.query({
            query: () => "/get-events/",
            providesTags: ["DiscoveryEvents"],
        }),

        getDiscoveryJobs: builder.query({
            query: () => "/get-jobs/",
            providesTags: ["DiscoveryJobs"],
        }),

        createCareerRoadmap: builder.mutation({
            query: (data) => ({
                url: "/create/career/roadmap/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["CareerRoadmap"],
        }),

        getCareerRoadmap: builder.query({
            query: (programId) => `/career/roadmap/${programId}/`,
            providesTags: (result, error, programId) => [{ type: "CareerRoadmap", id: programId }],
        }),

        getUniversityApplications: builder.query({
            query: () => "/university/applications/",
            providesTags: ["UniversityApplications"],
        }),

        updateApplicationStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/university/applications/${id}/update/status/`,
                method: "POST",
                body: { status },
            }),
            invalidatesTags: ["UniversityApplications"],
        }),

        uploadUniversityMedia: builder.mutation({
            query: (data) => ({
                url: "/university/upload/university/media/",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["uni_media"],
        }),

        getUniversityMedia: builder.query({
            query: () => "/university/gallery/",
            providesTags: ["uni_media"],
        }),

        getUniversityTestimonials: builder.query({
            query: (status) => `/university/get-testimonials/${status ? `?status=${status}` : ""}`,
            providesTags: ["uni_testimonials"],
        }),

        updateTestimonialStatus: builder.mutation({
            query: ({ id, action }) => ({
                url: `/university/testimonials/${id}/moderate/`,
                method: "PATCH",
                body: { action },
            }),
            invalidatesTags: ["uni_testimonials"],
        }),

        deleteUniversityMedia: builder.mutation({
            query: (id) => ({
                url: `/university/media/delete/${id}/`,
                method: "DELETE",
            }),
            invalidatesTags: ["uni_media"],
        }),
        getTestimonialsByUniId: builder.query({
            query: (id) => `/testimonials/?univ_id=${id}`,
            providesTags: (result, error, id) => ["uni_testimonials", { type: "UniversityTestimonials", id }],
        }),
        applyToUniversity: builder.mutation({
            query: ({ id, body }) => ({
                url: `/university/${id}/apply/`,
                method: "POST",
                body: body,
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
    useGetDiscoveryProgramsQuery,
    useGetJobsByUniIdQuery,
    useGetJobDetailsQuery,
    useGetDashboardStatsQuery,
    useAddTestimonialMutation,
    useGetDiscoveryEventsQuery,
    useGetDiscoveryJobsQuery,
    useCreateCareerRoadmapMutation,
    useGetCareerRoadmapQuery,
    useGetUniversityApplicationsQuery,
    useUpdateApplicationStatusMutation,
    useUploadUniversityMediaMutation,
    useGetUniversityMediaQuery,
    useGetUniversityTestimonialsQuery,
    useUpdateTestimonialStatusMutation,
    useDeleteUniversityMediaMutation,
    useGetTestimonialsByUniIdQuery,
    useApplyToUniversityMutation,
} = authapi;
