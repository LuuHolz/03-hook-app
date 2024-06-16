import { useEffect, useState } from "react";

//cache, si ya se llamo a esa url la busco aca y no vuelve a cargar
const localCache = {};




const useFetch = ( url: string) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: { code: null, message: ""},
  });

  useEffect(() => {

    const getFetch = async () => {

        if ( localCache[url] ) {
            console.log('Usando cache');

            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
              });

            return;
        }

        setLoadingState();

        try{
            const respuesta = await fetch( url );
    
            if (!respuesta.ok) {
              setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                  code: respuesta.status,
                  message: respuesta.statusText,
                },
              });
              return;
            } else {

            const data = await respuesta.json();
            // console.log(data)
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: { code: null, message: "" },
              });

              localCache[url] = data;
            }
        } catch (error) {
    
            setState({
              data: null,
              isLoading: false,
              hasError: true,
              error: { code: null, message: "" },
            });
        }
    };

    getFetch();
  }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
          });
    }


    return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError,
    };
  };

export { useFetch };
