export default function CTAButton() {
    return <>
        <div style={{
            display: 'inline-flex',
            padding: '0.5rem 0.5rem 0.5rem 1.25rem',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            borderRadius: '20rem',
            border: '1px solid #000',
            background: '#000',
            color:'white',
            position: 'fixed',
            bottom: '1rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex:'999999'
        }}>
            <p>Free consultation</p>
            <div style={{
                fontWeight:'400',
                width:'2.5rem',
                height:'2.5rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '100%',
                background: 'white',
                color:'black'
            }}
            >
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.86 8.96V7.38H12.44L6.6 1.86L7.66 0.779999L14.86 7.7V8.58L7.66 15.52L6.58 14.42L12.38 8.96H0.86Z"
                        fill="black"/>
                </svg>

            </div>
        </div>
    </>
}