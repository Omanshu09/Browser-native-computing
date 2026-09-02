CREATE TABLE users (id uuid PRIMARY KEY, email text UNIQUE NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE workspaces (id uuid PRIMARY KEY, owner_id uuid NOT NULL REFERENCES users(id), name text NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
CREATE TABLE workspace_members (workspace_id uuid REFERENCES workspaces(id) ON DELETE CASCADE, user_id uuid REFERENCES users(id) ON DELETE CASCADE, role text NOT NULL CHECK(role IN ('owner','editor','viewer')), PRIMARY KEY(workspace_id,user_id));
CREATE TABLE sync_operations (id uuid PRIMARY KEY, workspace_id uuid NOT NULL REFERENCES workspaces(id), actor_id uuid NOT NULL REFERENCES users(id), revision bigint NOT NULL, payload jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now());
CREATE INDEX sync_operations_workspace_revision ON sync_operations(workspace_id,revision);
