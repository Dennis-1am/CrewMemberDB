import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xueiiwxldyqfvgqawzww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1ZWlpd3hsZHlxZnZncWF3end3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTAxOTMxMCwiZXhwIjoyMDE0NTk1MzEwfQ.bT4qztK6KEJ2NmmFm5UAmYVb3EP69u6byLTEacTNk94'
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }