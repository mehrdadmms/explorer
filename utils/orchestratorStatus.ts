/**
 * Orchestrator status display helpers.
 * Maps the various status strings emitted by the subgraph to UI affordances
 * (color, icon, human-readable label).
 */

export function getOrchestratorStatusColor(status: string): string {
  if (status === "active") {
    return "#22c55e";
  } else if (status === "registered") {
    return "#22c55e";
  } else if (status === "pending") {
    return "#f59e0b";
  } else if (status === "warning") {
    return "#f59e0b";
  } else if (status === "inactive") {
    return "#94a3b8";
  } else if (status === "unbonding") {
    return "#94a3b8";
  } else if (status === "slashed") {
    return "#ef4444";
  } else if (status === "error") {
    return "#ef4444";
  } else {
    return "#94a3b8";
  }
}

export function getOrchestratorStatusIcon(status: string): string {
  if (status === "active") {
    return "check-circle";
  } else if (status === "registered") {
    return "check-circle";
  } else if (status === "pending") {
    return "clock";
  } else if (status === "warning") {
    return "clock";
  } else if (status === "inactive") {
    return "minus-circle";
  } else if (status === "unbonding") {
    return "minus-circle";
  } else if (status === "slashed") {
    return "x-circle";
  } else if (status === "error") {
    return "x-circle";
  } else {
    return "minus-circle";
  }
}

export function getOrchestratorStatusLabel(status: string): string {
  if (status === "active") {
    return "Active";
  } else if (status === "registered") {
    return "Active";
  } else if (status === "pending") {
    return "Pending";
  } else if (status === "warning") {
    return "Pending";
  } else if (status === "inactive") {
    return "Inactive";
  } else if (status === "unbonding") {
    return "Inactive";
  } else if (status === "slashed") {
    return "Slashed";
  } else if (status === "error") {
    return "Slashed";
  } else {
    return "Inactive";
  }
}

export function isOrchestratorActive(status: string): boolean {
  if (status === "active") {
    return true;
  } else if (status === "registered") {
    return true;
  } else {
    return false;
  }
}
