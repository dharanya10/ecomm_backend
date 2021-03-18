const request = require('supertest')
const { app } = require('../../server')

const req = request('http://localhost:3000')
describe("Testing the carts API", () => {
    let productA  
    let productB  
    let productC  
    let productD  
    it("add the product A, B, C", async () => {
        //Post product & discount
        await req.delete('/cart');
                productA = await req.post('/product').send  ({
                    "name": "a",
                    "price": 30
                })
                productB = await req.post('/product').send  ({
                    "name": "b",
                    "price": 20 
                })
                productC = await req.post('/product').send  ({
                    "name": "c",
                    "price": 35 
                })
                productD = await req.post('/product').send  ({
                    "name": "d",
                    "price": 35 
                })
                await req.post('/discount').send ({
                    "productId":productA.body._id,
                    "percentage":16.67,
                    "quantity":3
        
                })
                await req.post('/discount').send ({
                    "productId":productB.body._id,
                    "percentage":12.5,
                    "quantity":2
                })

                await req.delete('/cart');
                await req.post('/cart').send ({
                    "productId":productA.body._id,
                    "name":"A",
                    "price":30,
                    "quantity":1
        
                })
                
                await req.post('/cart').send ({
                    "productId":productB.body._id,
                    "name":"B",
                    "price":20,
                    "quantity":1
        
                })
                await req.post('/cart').send ({
                    "productId":productC.body._id,
                    "name":"C",
                    "price":50,
                    "quantity":1
        
                })
            let checkout = await req.get("/cart")
        
            expect(checkout.status).toBe(200)
            expect(checkout.body.totalAmount).toBe(100)
            })

            it("add the product B,A,B,A,A", async () => {
                await req.delete('/cart');

                        await req.post('/cart').send ({
                            "productId":productA.body._id,
                            "name":"A",
                            "price":30,
                            "quantity":3
                
                        })
                        
                        await req.post('/cart').send ({
                            "productId":productB.body._id,
                            "name":"B",
                            "price":20,
                            "quantity":2
                
                        })
                    let checkout = await req.get("/cart")
                
                    expect(checkout.status).toBe(200)
                    expect(checkout.body.totalAmount).toBe(110)
                    })
                    it("add the product C, B, A, A, D, A, B", async () => {
                        await req.delete('/cart');
                                
                                await req.post('/cart').send ({
                                    "productId":productA.body._id,
                                    "name":"A",
                                    "price":30,
                                    "quantity":3
                        
                                })
                                
                                await req.post('/cart').send ({
                                    "productId":productB.body._id,
                                    "name":"B",
                                    "price":20,
                                    "quantity":2
                        
                                })
                                await req.post('/cart').send ({
                                    "productId":productC.body._id,
                                    "name":"C",
                                    "price":50,
                                    "quantity":1
                        
                                })
                                await req.post('/cart').send ({
                                    "productId":productD.body._id,
                                    "name":"D",
                                    "price":15,
                                    "quantity":1
                        
                                })
                            let checkout = await req.get("/cart")
                        
                            expect(checkout.status).toBe(200)
                            expect(checkout.body.totalAmount).toBe(155)
                            })
                            it("add the product C,  A, A, D, A, ", async () => {
                    
                                await req.delete('/cart');
                                        
                                        await req.post('/cart').send ({
                                            "productId":productA.body._id,
                                            "name":"A",
                                            "price":30,
                                            "quantity":3
                                
                                        })
                                        await req.post('/cart').send ({
                                            "productId":productC.body._id,
                                            "name":"C",
                                            "price":50,
                                            "quantity":1
                                
                                        })
                                        await req.post('/cart').send ({
                                            "productId":productD.body._id,
                                            "name":"D",
                                            "price":15,
                                            "quantity":1
                                
                                        })
                                    let checkout = await req.get("/cart")
                                
                                    expect(checkout.status).toBe(200)
                                    expect(checkout.body.totalAmount).toBe(140)
                                    })
})
