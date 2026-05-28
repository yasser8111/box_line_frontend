import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Orders() {
  const [orderNumber, setOrderNumber] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(null); // 'loading', 'found', 'error'

  const handleTrack = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      if (orderNumber.trim() === '12345') {
        setStatus('found');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full flex flex-col items-center justify-center">
        
        <div className="text-center space-y-4 mb-10 w-full">
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 tracking-tight">تتبع الطلبات</h1>
          <p className="text-sm text-neutral-500 font-light">أدخل رقم الطلب ورقم الجوال لمعرفة حالة طلبك الحالي</p>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm">
          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">رقم الطلب</label>
              <input 
                type="text" 
                required 
                value={orderNumber} 
                onChange={(e) => setOrderNumber(e.target.value)} 
                className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 text-left bg-neutral-50 focus:bg-white transition-colors text-sm" 
                placeholder="#12345" 
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-neutral-700 mb-2">رقم الجوال مسجل بالطلب</label>
              <input 
                type="tel" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full px-4 py-3.5 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 text-left bg-neutral-50 focus:bg-white transition-colors text-sm" 
                placeholder="05XXXXXXXX" 
                dir="ltr"
              />
            </div>
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-full shadow-md transition-all text-sm flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span>بحث عن الطلب</span>
                </>
              )}
            </button>
          </form>

          {status === 'error' && (
            <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-2xl text-center animate-scale-in">
              <span className="text-sm font-bold text-neutral-900 block mb-1">لم يتم العثور على الطلب</span>
              <span className="text-xs text-neutral-500">تأكد من رقم الطلب ورقم الجوال (جرب: 12345)</span>
            </div>
          )}
        </div>

        {status === 'found' && (
          <div className="w-full mt-10 bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm animate-fade-in-up">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-neutral-100">
              <div>
                <h3 className="text-xl font-black text-neutral-900">طلب رقم #{orderNumber}</h3>
                <p className="text-sm text-neutral-500 mt-1 font-light">تاريخ الطلب: 20 مايو 2026</p>
              </div>
              <span className="px-4 py-1.5 bg-neutral-100 text-neutral-700 text-sm font-bold rounded-full border border-neutral-200">جاري التجهيز والطباعة</span>
            </div>

            <div className="relative pt-4 pb-8">
              {/* Timeline Track */}
              <div className="absolute top-8 left-8 right-8 h-1 bg-neutral-100 rounded-full"></div>
              <div className="absolute top-8 right-8 h-1 bg-neutral-900 rounded-full" style={{ width: '45%' }}></div>

              {/* Timeline Steps */}
              <div className="relative flex justify-between">
                
                <div className="flex flex-col items-center w-16 gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shadow-md z-10">✓</div>
                  <span className="text-xs font-bold text-neutral-900 text-center">تم استلام الطلب</span>
                </div>

                <div className="flex flex-col items-center w-16 gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold shadow-md z-10 animate-pulse">2</div>
                  <span className="text-xs font-bold text-neutral-900 text-center">الطباعة والتجهيز</span>
                </div>

                <div className="flex flex-col items-center w-16 gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-400 flex items-center justify-center font-bold z-10">3</div>
                  <span className="text-xs font-bold text-neutral-400 text-center">في الطريق إليك</span>
                </div>

                <div className="flex flex-col items-center w-16 gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-200 text-neutral-400 flex items-center justify-center font-bold z-10">4</div>
                  <span className="text-xs font-bold text-neutral-400 text-center">تم التوصيل</span>
                </div>

              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-100 mt-4 flex justify-between items-center">
               <div className="text-sm">
                 <span className="block text-neutral-500 font-semibold mb-1">شركة الشحن: سمسا السريع</span>
                 <span className="block text-neutral-900 font-bold">رقم التتبع: -</span>
               </div>
               <button className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-xs font-bold hover:bg-neutral-50 transition-colors">تواصل مع الدعم</button>
            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
