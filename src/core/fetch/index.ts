import { toast } from "react-toastify";

interface IClient {
  endpoint: string;
  req: RequestInit;
}

interface IDataResponse {
  msg: string;
  data: any;
}

interface IErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

export default async function client({
  endpoint,
  req: { body, ...customConfig },
}: IClient) {
  const headers = { "Content-Type": "application/json" };
  const config: RequestInit = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.NEXT_PUBLIC_API_DEV_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        const { msg, data }: IDataResponse = await response.json();
        toast.success(msg);
        return data;
      } else {
        const { message }: IErrorResponse = await response.json();
        toast.error(message);
      }
    });
}
