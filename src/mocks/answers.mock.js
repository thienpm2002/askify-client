// answers.js

export const answers = [
  // Question 1
  {
    id: 1,
    questionId: 1,
    content:
      "Yes, you are missing the most important step.\n\nYou created the Authentication object but never stored it inside the SecurityContextHolder.\n\n```java\nSecurityContextHolder.getContext().setAuthentication(authToken);\n```\n\nWithout this, Spring Security still treats the request as anonymous.",
    voteCount: 28,
    accepted: true,
    author: {
      id: 10,
      userName: "spring_expert",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T12:30:12.436937",
    updatedAt: "2026-05-05T12:30:12.436937",
  },

  {
    id: 2,
    questionId: 1,
    content:
      "Also make sure your filter extends OncePerRequestFilter.",
    voteCount: 10,
    accepted: false,
    author: {
      id: 11,
      userName: "java_dev",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T13:10:12.436937",
    updatedAt: "2026-05-05T13:10:12.436937",
  },

  {
    id: 3,
    questionId: 1,
    content:
      "Double check that the JWT token is actually sent in the Authorization header.",
    voteCount: 7,
    accepted: false,
    author: {
      id: 12,
      userName: "security_helper",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T13:40:12.436937",
    updatedAt: "2026-05-05T13:40:12.436937",
  },

  {
    id: 4,
    questionId: 1,
    content:
      "Verify your requestMatchers configuration because wrong patterns can also cause 403 errors.",
    voteCount: 5,
    accepted: false,
    author: {
      id: 13,
      userName: "spring_helper",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T14:01:12.436937",
    updatedAt: "2026-05-05T14:01:12.436937",
  },

  {
    id: 5,
    questionId: 1,
    content:
      "JWT authentication should usually be stateless.\n\n```java\n.sessionManagement(session ->\n    session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n)\n```",
    voteCount: 6,
    accepted: false,
    author: {
      id: 14,
      userName: "backend_master",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T14:20:12.436937",
    updatedAt: "2026-05-05T14:20:12.436937",
  },

  // Question 2
  {
    id: 6,
    questionId: 2,
    content:
      "React compares references, not deep values.\n\nMutating the same array keeps the same reference so React may skip rerendering.",
    voteCount: 30,
    accepted: true,
    author: {
      id: 15,
      userName: "react_pro",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T10:00:12.436937",
    updatedAt: "2026-05-06T10:00:12.436937",
  },

  {
    id: 7,
    questionId: 2,
    content:
      "Immutable updates also make debugging easier because old state snapshots remain unchanged.",
    voteCount: 9,
    accepted: false,
    author: {
      id: 16,
      userName: "frontend_dev",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T10:20:12.436937",
    updatedAt: "2026-05-06T10:20:12.436937",
  },

  {
    id: 8,
    questionId: 2,
    content:
      "React memoization techniques rely heavily on immutable state patterns.",
    voteCount: 8,
    accepted: false,
    author: {
      id: 17,
      userName: "ui_engineer",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T10:40:12.436937",
    updatedAt: "2026-05-06T10:40:12.436937",
  },

  {
    id: 9,
    questionId: 2,
    content:
      "Direct mutation can also create bugs when multiple components depend on shared state.",
    voteCount: 6,
    accepted: false,
    author: {
      id: 18,
      userName: "react_teacher",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T11:00:12.436937",
    updatedAt: "2026-05-06T11:00:12.436937",
  },

  {
    id: 10,
    questionId: 2,
    content:
      "Libraries like Redux strongly encourage immutable update patterns.",
    voteCount: 5,
    accepted: false,
    author: {
      id: 19,
      userName: "redux_fan",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T11:20:12.436937",
    updatedAt: "2026-05-06T11:20:12.436937",
  },

  // Question 3
  {
    id: 11,
    questionId: 3,
    content:
      "Separate tables are usually easier to maintain and query efficiently.",
    voteCount: 18,
    accepted: true,
    author: {
      id: 20,
      userName: "db_architect",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T14:10:12.436937",
    updatedAt: "2026-05-06T14:10:12.436937",
  },

  {
    id: 12,
    questionId: 3,
    content:
      "Polymorphic tables often become harder to validate correctly later.",
    voteCount: 9,
    accepted: false,
    author: {
      id: 21,
      userName: "sql_master",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T14:30:12.436937",
    updatedAt: "2026-05-06T14:30:12.436937",
  },

  {
    id: 13,
    questionId: 3,
    content:
      "Do not forget unique constraints like:\n\n```sql\nUNIQUE(user_id, post_id)\n```",
    voteCount: 7,
    accepted: false,
    author: {
      id: 22,
      userName: "postgres_dev",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T14:50:12.436937",
    updatedAt: "2026-05-06T14:50:12.436937",
  },

  {
    id: 14,
    questionId: 3,
    content:
      "Separate tables improve analytics and reporting later.",
    voteCount: 5,
    accepted: false,
    author: {
      id: 23,
      userName: "data_engineer",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T15:10:12.436937",
    updatedAt: "2026-05-06T15:10:12.436937",
  },

  {
    id: 15,
    questionId: 3,
    content:
      "The single table approach may look flexible initially but often grows messy.",
    voteCount: 4,
    accepted: false,
    author: {
      id: 24,
      userName: "backend_guru",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T15:30:12.436937",
    updatedAt: "2026-05-06T15:30:12.436937",
  },
];