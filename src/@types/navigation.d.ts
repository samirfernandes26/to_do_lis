import { RootStackParamList } from "../routes/RootStackParamsList";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}