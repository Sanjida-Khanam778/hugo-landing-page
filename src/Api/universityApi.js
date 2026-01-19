import { api } from "./api";

export const authapi = api.injectEndpoints({
  endpoints: (builder) => ({
    createProgram: builder.mutation({
      query: (data) => ({
        url: "/programs/add/",
        method: "POST",
        body: data,
      }),
    }),

    programUpdate: builder.mutation({
      query: (data) => ({
        url: `/programs/edit/${data.id}/`,
        method: "PATCH",
        body: data,
      }),
    }),  

    getAllPrograms: builder.query({
      query: () => "/programs/",
      invalidatesTags: ["uni_users"],
    }),

    getProgramById: builder.query({
      query: (id) => `/program/${id}/`,
    }),

    deleteProgram: builder.mutation({
      query: (id) => ({
        url: `/programs/delete/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["uni_users"],
    }),
  }),
});

export const {
  useCreateProgramMutation,
  useGetAllProgramsQuery,
  useProgramUpdateMutation,
  useDeleteProgramMutation,
  useGetProgramByIdQuery,
} = authapi;
