import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";


export const Applogin = (formData) => apiWithOutAuth.post("/login", formData).then(getApiResponse).catch(getErrorResponse);
export const AppCreateNewPassword = (formData) => apiWithOutAuth.post("/recover/create_new_password", formData).then(getApiResponse).catch(getErrorResponse);
export const AppVerifyOtp = (formData) => apiWithOutAuth.post("/recover/send_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const AppResendOtp = (formData) => apiWithOutAuth.post("/recover/resend_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const AppNewPassword = (formData) => apiWithOutAuth.post("/recover/create_new_password", formData).then(getApiResponse).catch(getErrorResponse);
export const pagination = (formData) => apiWithAuth.post(formData).then(getApiResponse).catch(getErrorResponse);

export const fetchUsers = () => apiWithAuth.post("/admin/user/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchAUser = (formData) => apiWithAuth.post("/admin/user/fetch_a_user", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchSuspendedUser = () => apiWithAuth.post("/admin/user/fetch_suspended_users").then(getApiResponse).catch(getErrorResponse);
export const suspendUser = (formData) => apiWithAuth.post("/admin/user/suspend", formData).then(getApiResponse).catch(getErrorResponse);
export const unsuspendUser = (formData) => apiWithAuth.post("/admin/user/unsuspend", formData).then(getApiResponse).catch(getErrorResponse);
export const userLogs = () => apiWithAuth.post("/admin/user/fetch_user_logs").then(getApiResponse).catch(getErrorResponse);


export const fetchPosts = () => apiWithAuth.post("/admin/post/fetch").then(getApiResponse).catch(getErrorResponse);
export const fetchApost = () => apiWithAuth.post("/admin/post/fetch_a_post").then(getApiResponse).catch(getErrorResponse);
export const deletePost = (formData) => apiWithAuth.post("/admin/post/delete", formData).then(getApiResponse).catch(getErrorResponse);


export const fetchGroup = () => apiWithAuth.post("/admin/group/fetch").then(getApiResponse).catch(getErrorResponse);
export const createGroup = () => apiWithAuth.post("/admin/group/create").then(getApiResponse).catch(getErrorResponse);
export const fetchAGroup = () => apiWithAuth.post("/admin/group/fetch_a_group").then(getApiResponse).catch(getErrorResponse);
export const createPerference = (formData) => apiWithAuth.post("/admin/group/create_perference", formData).then(getApiResponse).catch(getErrorResponse);
export const deleteGroup = (formdata) => apiWithAuth.post("/admin/group/delete", formdata).then(getApiResponse).catch(getErrorResponse);


export const fetchReportReason = () => apiWithAuth.post("/admin/report/fetch_reports").then(getApiResponse).catch(getErrorResponse);
export const resolvePostReport = () => apiWithAuth.post("/admin/report/resolve_post_report").then(getApiResponse).catch(getErrorResponse);
export const resolveGroupReport = () => apiWithAuth.post("/admin/report/resolve_group_report").then(getApiResponse).catch(getErrorResponse);