## Steps for Quick Local Setup

- In the `frontend` directory, you can run:

1.  `npm install`

2.  `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

- In the `backend` directory:

Install the required modules:

1. pip install python-dotenv
2. pip install django-cors-headers

Then, you can run:

1. `python manage.py runserver`

Runs the server in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

Visit [http://localhost:8000/admin](http://localhost:8000/admin) to view the django admin panel.

- Note: There's a `.env` file in the `backend` directory containing SECRET_KEY mentioned in the `backend/settings.py` file

## To import the scraped data in Django :

1. pip install django-import-export
2. Now the following options: `Import`, `Export`, `Add quill blog` must be visbile on the django admin page. Use the `Import` button to import your data in the required format
