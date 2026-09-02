# ADR 001: Browser persistence is local-first

Orbit stores each filesystem node as an IndexedDB record. This keeps directory operations granular, permits eventual OPFS blobs for large content, and lets UI applications stay independent of backend availability. A future sync adapter translates explicit operation records into server revisions; it must preserve local intent and mark concurrent edits for CRDT or user resolution.
