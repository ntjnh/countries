import { useNavigate } from 'react-router'

export default function NotFound() {
    const navigate = useNavigate()
    const toHome = () => navigate('/')

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center">404 - Not Found</h1>
            <p className="text-center">
                The page you are looking for does not exist.
            </p>
            <button className="" onClick={toHome}>Back to Home</button>
        </div>
    )
}
