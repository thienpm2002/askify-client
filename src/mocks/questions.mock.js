// questions.js

export const questions = [
  {
    id: 1,
    title: "JWT authentication still returns 403 after adding custom filter",
    content:
      "I am learning Spring Security with JWT authentication and I cannot understand why all protected endpoints still return 403 Forbidden.\n\nHere is my SecurityFilterChain:\n\n```java\n@Bean\npublic SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf(csrf -> csrf.disable())\n        .sessionManagement(session ->\n            session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)\n        )\n        .authorizeHttpRequests(auth -> auth\n            .requestMatchers(\"/api/auth/**\").permitAll()\n            .anyRequest().authenticated()\n        )\n        .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);\n\n    return http.build();\n}\n```\n\nAnd inside my filter:\n\n```java\nif (jwtService.isTokenValid(token, userDetails)) {\n    UsernamePasswordAuthenticationToken authToken =\n        new UsernamePasswordAuthenticationToken(\n            userDetails,\n            null,\n            userDetails.getAuthorities()\n        );\n}\n```\n\nDo I need to manually set the authentication somewhere else?",
    tags: ["spring-boot", "spring-security", "jwt"],
    voteCount: 22,
    answerCount: 5,
    author: {
      id: 1,
      userName: "Thienpm",
      avatarUrl: null,
    },
    createdAt: "2026-05-05T11:01:40.436937",
    updatedAt: "2026-05-05T11:01:40.436937",
  },

  {
    id: 2,
    title: "Why does React require immutable state updates?",
    content:
      "I am trying to understand why React recommends immutable updates.\n\nThis code sometimes does not rerender correctly:\n\n```jsx\nconst [todos, setTodos] = useState([]);\n\nfunction addTodo() {\n  todos.push({\n    id: Date.now(),\n    text: 'New Todo'\n  });\n\n  setTodos(todos);\n}\n```\n\nWhy is mutating the array directly considered bad practice in React?",
    tags: ["reactjs", "javascript", "frontend"],
    voteCount: 18,
    answerCount: 5,
    author: {
      id: 2,
      userName: "react_beginner",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T09:15:10.436937",
    updatedAt: "2026-05-06T09:15:10.436937",
  },

  {
    id: 3,
    title: "Best way to model likes for posts and comments?",
    content:
      "I am designing a database for a social media application.\n\nShould I use separate tables:\n\n```sql\npost_likes\ncomment_likes\n```\n\nOr a single table like this:\n\n```sql\nlikes(\n    user_id BIGINT,\n    post_id BIGINT NULL,\n    comment_id BIGINT NULL\n)\n```\n\nWhich approach is better in real-world systems?",
    tags: ["sql", "database-design", "postgresql"],
    voteCount: 14,
    answerCount: 5,
    author: {
      id: 3,
      userName: "db_student",
      avatarUrl: null,
    },
    createdAt: "2026-05-06T13:45:22.436937",
    updatedAt: "2026-05-06T13:45:22.436937",
  },

  {
    id: 4,
    title: "Why is my Docker data deleted after removing the container?",
    content:
      "I created a MySQL container:\n\n```bash\ndocker run -d \\\n  --name mysql-container \\\n  -e MYSQL_ROOT_PASSWORD=root \\\n  mysql:8\n```\n\nAfter removing the container all database data disappears.\n\nI read about Docker volumes but still do not fully understand them.",
    tags: ["docker", "devops", "mysql"],
    voteCount: 20,
    answerCount: 0,
    author: {
      id: 4,
      userName: "docker_newbie",
      avatarUrl: null,
    },
    createdAt: "2026-05-07T08:30:40.436937",
    updatedAt: "2026-05-07T08:30:40.436937",
  },

  {
    id: 5,
    title: "How does Redis caching work in production systems?",
    content:
      "Most tutorials only show simple examples:\n\n```java\n@Cacheable(\"users\")\npublic User getUser(Long id) {\n    return userRepository.findById(id).orElseThrow();\n}\n```\n\nBut I want to understand how caching is actually handled in real-world systems.\n\n- How do developers invalidate cache?\n- What happens when Redis crashes?\n- Should every query be cached?",
    tags: ["redis", "caching", "backend"],
    voteCount: 26,
    answerCount: 0,
    author: {
      id: 5,
      userName: "cache_learner",
      avatarUrl: null,
    },
    createdAt: "2026-05-08T10:15:11.436937",
    updatedAt: "2026-05-08T10:15:11.436937",
  },
];