export function mapHttpStatus(status: string): number {
  const statusMap: { [key: string]: number } = {
      'CREATED': 201,
      'OK': 200,
      'NO_CONTENT': 204,
      'BAD_REQUEST': 400,
      'UNAUTHORIZED': 401,
      'FORBIDDEN': 403,
      'NOT_FOUND': 404,
      'CONFLICT': 409,
      'INTERNAL_SERVER_ERROR': 500,
  };
  return statusMap[status] || 500;
}