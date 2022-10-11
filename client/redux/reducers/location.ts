import { ADD_CURRENT_LOCATION } from "../types"


export interface LocationProps {
    coordinates: [number, number] | []
}

const initialState: LocationProps = {
    coordinates: [],
}

export const location = (state = initialState, action: any) => {    
    switch (action.type) {
        case ADD_CURRENT_LOCATION: {
            return {
                ...state,
                coordinates: action.payload
            }
        }
    }
    return state
}