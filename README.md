# Reactjs with Firebase Authentication

This a simple Reactjs project showcasing use of firebase authentication. It has both public and private endpoints. Private endpoints are protected using session handling.

For users that signs in through email/password in the website, it is also possible to make password modifications (like reset or change password). For users that signs in using Facebook, this feature is disabled.

## Some Endpoints

- `/`: it's the root route, also called the landing page.
- `/signin`: where the user is able to login either through Facebook or via email/password
- `/signup`: where the user can signup using email/password.
- `/account`: protected endpoint, available only for users registered using email/password. At this endpoint, they can modify/reset their password.
- `/home`: protected endpoint, reachable only for authenticated users.

