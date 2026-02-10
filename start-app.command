#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

URL="${APP_URL:-http://localhost:8888}"

if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting dev server..."
npm run dev &
DEV_PID=$!

cleanup() {
  if kill -0 "$DEV_PID" >/dev/null 2>&1; then
    kill "$DEV_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

echo "Waiting for server: $URL"
for _ in $(seq 1 60); do
  if curl -fsS "$URL" >/dev/null 2>&1; then
    echo "Server is ready. Opening browser..."
    open "$URL"
    wait "$DEV_PID"
    exit $?
  fi
  sleep 1
done

echo "Server startup check timed out after 60s, trying to open browser anyway..."
open "$URL" || true
wait "$DEV_PID"
