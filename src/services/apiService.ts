/* eslint-disable react-hooks/rules-of-hooks */
// apiService.js
"use client";

import LoadingModal from "@/components/Loading/LoadingModal";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";

const getApiUrl = () => {
  if (typeof window !== "undefined") {
    switch (window.location.host) {
      case "dev.360erp.com.br":
        return "https://api-dev.360erp.com.br";
      case "app.360erp.com.br":
        return "https://api-prd.360smarttrade.com.br";
      default:
        return "https://api-dev.360erp.com.br";
    }
  }
};

const baseURL = getApiUrl();

const apiService = axios.create({
  baseURL,
});

interface PerformCRUDParams {
  method: AxiosRequestConfig["method"];
  endpoint: string;
  data?: any;
}

const performLoginCRUD = async ({
  method,
  endpoint,
  data,
}: PerformCRUDParams): Promise<any> => {
  const [loading, setLoading] = useState(false);

  try {
    setLoading(true);
    const response: AxiosResponse = await apiService({
      method,
      url: endpoint,
      data,
    });
    setLoading(false);
    return response.data;
  } catch (error: any) {
    setLoading(false);
    throw error;
  } finally {
    setLoading(false);
  }
};

const performCRUD = async ({
  method,
  endpoint,
  data,
}: PerformCRUDParams): Promise<any> => {
  const [loading, setLoading] = useState(false);

  const getLocalStorage = () => {
    try {
      const data = window.localStorage.getItem("user");
      return JSON.parse(data!);
    } catch (e) {
      return null;
    }
  };

  const acess = getLocalStorage();

  try {
    setLoading(true);
    const response: AxiosResponse = await apiService({
      method,
      url: endpoint,
      data,
      headers: {
        Authorization: acess ? "Bearer " + acess.accessToken : null,
      },
    });
    setLoading(false);
    return response.data;
  } catch (error: any) {
    setLoading(false);
    throw error;
  } finally {
    setLoading(false);
  }
};

export { LoadingModal, performCRUD, performLoginCRUD };
export default apiService;
