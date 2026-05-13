1. Where to place Socket.IO server in Next.js?

❗ Next.js API routes restart on every request, so you CANNOT use /api/socket as the Socket server.

You MUST use a custom Node.js server.

<img width="1366" height="651" alt="hospital (1)" src="https://github.com/user-attachments/assets/ac379aac-3a6a-4f91-b710-390681cf5b3c" />
<img width="1366" height="728" alt="hospital (3)" src="https://github.com/user-attachments/assets/17b4eab9-d210-4ffb-a5d4-20e5f91a5ae9" />
