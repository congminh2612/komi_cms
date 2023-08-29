import { Layout } from 'components/layouts'
import { CategoryScreen } from 'features/categories'
import { DashboardScreen } from 'features/dashboard'
import { OrderScreen } from 'features/orders'
import { ProductScreen } from 'features/products'
import { UserScreen } from 'features/users'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<DashboardScreen />} />
          <Route path="user" element={<UserScreen />} />
          <Route path="product" element={<ProductScreen />} />
          <Route path="order" element={<OrderScreen />} />
          <Route path="category" element={<CategoryScreen />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
