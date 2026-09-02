# Security model

The browser app only receives narrow capability services. API input is size-limited and schema-validated; Helmet headers, explicit CORS origins, request IDs, and structured logging are enabled. Sessions and authorization must be inserted before externally exposing workspace endpoints. Execution is never subprocess-based: an external sandbox adapter must enforce per-session CPU, memory, network, filesystem, timeout, output, and cleanup limits. Store no secrets in source or browser bundles.
