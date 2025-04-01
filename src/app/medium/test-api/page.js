import TestApi from "./client-page"

export const metadata = {
    title: 'test-api',
}

export const dynamic = 'force-dynamic';

export default function App() {
    return(
    <>
    <TestApi />
    </>    
    )
}
