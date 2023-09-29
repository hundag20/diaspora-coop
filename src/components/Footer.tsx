import '../styles/footer.scss'
export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    return (
        <div>
            <section className='footer-top'>
                <div className='column col1'>
                    <p className='title'>About Diaspora</p>
                </div>
                <div className='column col2'>
                    <p className='title'>Important Links</p>
                </div>
                <div className='column col3'>
                    <p className='title'>Quick Links</p>
                </div>
                <div className='column col4'>
                    <p className='title'>Contact Info</p>
                </div>
            </section>
        </div>
    );
}
