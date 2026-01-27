import { useGetPrivacyPolicyQuery } from "../../Api/universityApi";
import { ScrollRestoration } from "react-router-dom";

export default function PrivacyPolicy() {
    const { data, isLoading, error } = useGetPrivacyPolicyQuery();

    return (
        <div className="min-h-[80vh] pt-20 py-12 my-10">
            <ScrollRestoration />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 border-b pb-4">
                        Privacy Policy
                    </h1>

                    {isLoading ? (
                        <div className="flex justify-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-500 font-medium">
                            Error loading privacy policy. Please try again later.
                        </div>
                    ) : (
                        <div
                            className="policy-content text-gray-700"
                            dangerouslySetInnerHTML={{ __html: data?.content || "No content available." }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
