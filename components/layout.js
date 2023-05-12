import { cartContext } from "@/contextApi"

export default function Layout({ children }) {
    return (
        <cartContext>
            {children}
        </cartContext>
    )
}