export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    // Check for authorization errors
    if (error.message.includes('Unauthorized')) {
      return 'You do not have permission to perform this action.';
    }
    if (error.message.includes('not authenticated')) {
      return 'Please sign in to continue.';
    }
    if (error.message.includes('Admin')) {
      return 'Admin privileges are required for this action.';
    }
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
}

export function handleAuthError(error: unknown): string {
  const message = getErrorMessage(error);
  console.error('Authentication error:', error);
  return message;
}

export function handleMutationError(error: unknown, defaultMessage: string): string {
  const message = getErrorMessage(error);
  console.error('Mutation error:', error);
  return message || defaultMessage;
}
