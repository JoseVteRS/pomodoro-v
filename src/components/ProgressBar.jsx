
const KIND = {
    primary: 'bg-primary',
    secondary: 'bg-blue-500',
}

export const ProgressBar = ({ value, reverseValue = true, kind = 'primary' }) => {

    const reverseCountValue = reverseValue ? 100 - value : value

    return (
        <div className='bg-secondary rounded-full relative shadow-md h-1' >
            <div style={{ height: 'inherit', width: `${reverseCountValue}%` }} className={`${KIND[kind]} rounded-full transition-all duration-500`}>
                
            </div>
        </div>
    )
}
