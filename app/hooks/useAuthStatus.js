import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useAuthStatus = () => {
  const { data: sessionData, status } = useSession();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (sessionData) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [sessionData]);

  return { isAuthenticated, status };
};

export default useAuthStatus;
