import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Главная
                </Link>
                <Link underline="hover" color="inherit" href="/">
                    Гостиные
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/material-ui/react-breadcrumbs/"
                    aria-current="page"
                >
                    Коллекции
                </Link>
            </Breadcrumbs>
        </div>
    );
}