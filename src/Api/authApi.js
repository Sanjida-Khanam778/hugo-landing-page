import { api } from "./api";
import { setCredentials } from "../features/authSlice";
import { CloudCog } from "lucide-react";

export const authapi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => ({
        url: "/accounts/signup/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { refresh_token, access_token, data: userData } = data; // destructure data.data as userData

          // Dispatch setCredentials to update Redux state
          dispatch(
            setCredentials({
              refresh: refresh_token,
              access: access_token,
              user: userData,
            })
          );

          // Persist user data to localStorage (legacy support)
          localStorage.setItem("auth", JSON.stringify({ refresh: refresh_token, access: access_token }));
        } catch (error) {
          // console.error("Signup error:", error);
        }
      },
    }),
    universitySignup: builder.mutation({
      query: (data) => ({
        url: "/university/signup/university/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { refresh_token, access_token, user } = data;

          // Dispatch setCredentials to update Redux state
          dispatch(
            setCredentials({
              refresh: refresh_token,
              access: access_token,
              user: user,
            })
          );

          // Persist user data to localStorage (legacy support)
          localStorage.setItem("auth", JSON.stringify({ refresh: refresh_token, access: access_token }));
        } catch (error) {
          // console.error("Signup error:", error);
        }
      },
    }),
    forgetPass: builder.mutation({
      query: ({ email }) => ({
        url: "/accounts/send-otp/",
        method: "POST",
        body: { email },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/accounts/signin/",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const { refresh_token, access_token, data: userData } = data;

          // Dispatch setCredentials to update Redux state
          dispatch(
            setCredentials({
              refresh: refresh_token,
              access: access_token,
              user: userData,
            })
          );

          // Persist user data to localStorage
          localStorage.setItem(
            "auth",
            JSON.stringify({ refresh: refresh_token, access: access_token })
          );
        } catch (error) {
          // console.error("Login error:", error);
        }
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/accounts/verify-otp/",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/accounts/reset-password/",
        method: "POST",
        body: data,
      }),
    }),

    // profileUpdate: builder.mutation({
    //   query: (data) => ({
    //     url: "/user/update-profile/",
    //     method: "PUT",
    //     body: data,
    //   }),
    // }),

    // getUserProfile: builder.query({
    //   query: () => "/user/profile/",
    //   invalidatesTags: ["chats"],
    // }),
  }),
});

export const {
  useSignupMutation,
  useForgetPassMutation,
  useLoginMutation,
  useLogoutMutation,
  useProfileUpdateMutation,
  useResetPasswordMutation,
  useVerifyOtpMutation,
  useGetUserProfileQuery,
  useUniversitySignupMutation
} = authapi;
