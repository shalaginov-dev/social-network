import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {ComponentType} from "react";
import {OwnPropsType} from "../components/Profile/ProfileContainer";

export type PathParamsType = {
    router: {
        location: {
            hash: string,
            key: string,
            pathname: string,
            search: string,
            state: null
        }
        params: {
            userId: string
        }
        navigation: ()=> void
    }
}

export function withRouter<T>(Component: ComponentType<T>) {

    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}