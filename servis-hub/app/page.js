import { supabase } from '@/lib/supabase'

export default async function Home() {
  // Načítame zákazníkov z databázy
  const { data: customers, error } = await supabase
    .from('customers')
    .select('id, name, email, phone')
    .order('created_at', { ascending: false })

  return (
    <main style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>ServisHub – Zákazníci</h1>
      <p>Údaje sú načítané zo Supabase databázy.</p>
      <div style={{ marginTop: 20 }}>
        {customers?.length ? (
          customers.map((c) => (
            <div key={c.id} style={{
              border: '1px solid #ddd',
              padding: 10,
              marginBottom: 10,
              borderRadius: 8
            }}>
              <strong>{c.name}</strong> <br />
              {c.email || '—'} <br />
              {c.phone || '—'}
            </div>
          ))
        ) : (
          <p>Žiadni zákazníci.</p>
        )}
      </div>
    </main>
  )
}