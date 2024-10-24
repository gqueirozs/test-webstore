import { RouteObject } from "react-router-dom"
import Fonts from "Pages/Library/Pages/Fonts"
import TextFields from "Pages/Library/Pages/TextFields"
import TextAreas from "Pages/Library/Pages/TextAreas"
import CheckFields from "Pages/Library/Pages/CheckFields"
import Buttons from "Pages/Library/Pages/Buttons"
import Ranges from "Pages/Library/Pages/Ranges"
import Alerts from "Pages/Library/Pages/Alerts"
import ImageUpload from "Pages/Library/Pages/ImageUpload"
import IconsShowCase from "Pages/Library/Pages/IconsShowCase"
import Select from "Pages/Library/Pages/Select"
import TagsShowCase from "Pages/Library/Pages/TagsShowCase"
import MainLayout from "Layout"
import { ProductFormPage } from "Pages/Products/Pages/ProductFormPage"


const route:RouteObject = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/products/create',
      element: <ProductFormPage />,
    },
    {
      path: 'library/fonts',
      element: <Fonts />,
    },
    {
      path: 'library/textfields',
      element: <TextFields />,
    },
    {
      path: 'library/select',
      element: <Select />,
    },
    {
      path: 'library/checkfields',
      element: <CheckFields />,
    },
    {
      path: 'library/range',
      element: <Ranges />,
    },
    {
      path: 'library/textareas',
      element: <TextAreas />,
    },
    {
      path: 'library/buttons',
      element: <Buttons />,
    },
    {
      path: 'library/imageupload',
      element: <ImageUpload />
    },
    {
      path: 'library/alerts',
      element: <Alerts />,
    },
    {
      path: 'library/tags',
      element: <TagsShowCase />,
    },
    {
      path: 'library/icons',
      element: <IconsShowCase />,
    }
  ]
}

export default route