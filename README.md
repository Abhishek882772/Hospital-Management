1. Where to place Socket.IO server in Next.js?

❗ Next.js API routes restart on every request, so you CANNOT use /api/socket as the Socket server.

You MUST use a custom Node.js server.