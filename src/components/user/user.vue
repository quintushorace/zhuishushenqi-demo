<template>
    <div class="details">
        <div class="header1">
            <div class="head-left" @click="$router.back(-1)">
                <i class="el-icon-arrow-left"></i>
                <span>返回</span>
            </div>
            <h2>个人中心</h2>
            <div @click="$router.push('/home/shujia')" class="head-right">
                <i></i>
            </div>
        </div>
        <div class="user-box">
            <div class="img-box"><span>头像</span></div>
            <div class="username-box">
                <span class="username">{{ userName }}</span>
            </div>
            
        </div>
        <div class="list-box">
            <ul>
                <li>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjI1MDhFMkVGOTFEMDExRTZBMUY0QjJFREUxQTMwNTc3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjI1MDhFMkYwOTFEMDExRTZBMUY0QjJFREUxQTMwNTc3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjUwOEUyRUQ5MUQwMTFFNkExRjRCMkVERTFBMzA1NzciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MjUwOEUyRUU5MUQwMTFFNkExRjRCMkVERTFBMzA1NzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4VWBStAAAEFUlEQVR42uSbTUhUURTHT+Ok+DFWy0rLPq0Uow9QF5VtclGCFpbRIq1NCbYpMCoLLN1UK4lIwg8IIU0NpE0uLKRSiMTSojLtSzdBhg4Omh+dM3NeDZPjvI/73ryZ94ff7s255//uve+de++bRQdac0EHRSLpSCayEdmErEKWIg6+Zhz5hXxHBpE+5BnSjUyJTsguMBaZyEcOIbuQmADXO5hEviGSJpBOpBl5gIyKSM4mIEYqUouMINVItgyTCymGY1CsYY6dGkyjSUgj0osUItE6TIFojt3LbSUZaZTm3wXkLQ9VG+gvG7dFbV7kHHQ1ugF5jlTo1INyevga0sW56GI0D3mJ7IDgaxvnclC00WKkCYkH8yie522xKKNlyC0kAsynCM6tTKvR00g5mF/lnKsqozT+qyB0VMXFiiKj65Eakw7XhYZxDecuy2gUch9ZAqEn6QEVJcfoWWQ7hK7o1XMuUFG/hisPoWrLbQ14Tc7DPJFNUuXWgAz569EKjQW5WUQeKv31KJVUhxWv82x2OJFSCFmJe8ARGae5l3x73/nbCR1fn0JNfx1Mz04rCUVeriAffHu0VM1TtijlOOSs2/+fSVGKWxznjn9s81E1dXyp79ClBXCBmkT2JmYpup56WUKJslfvU5PeEWlHw+ZVHMSqiaRXTwpqJ1Yq/KU5WmDUU0LOE1iwaMzX23kRu1trNO+hKMKMwHi0fxVFRjOMfKWIviEyXzXpZDTTjENScLwMMppm5IQJwhwlJZPRtWYckoLjuY2uMPLWBmGOklaS0WUWmKMOO/w7CwnnOeqwgUVERsct4HOcjI5axeiIBYwOk9FBCxh9T0ZfW8XoCwsY7SKjdAQ3EcYmyVs3GaUPIzrD2Ch5m5QKhuYwNtosFQwk+vrDpeoFNeU05kWorh0Xe/trlIqGRjWROr49McTo4y/tan7WJBVE3rXudWROaaTa/npo+/TIvdGshyguxb/3rkHpT+fYk1veO/X9fAcU7dbT7nn1m7tuRK9XNYq89HkX9d46Hyavmgn2AvP1KIlOnyoYXXYVDFIleJ2kzdejpJvIqxDuzR7kxnzrUV9NgufMYiwETY7xM2ZSjlHSAHISmQkhkzOc84C/HQZ/ohdtSQgZLZGKA6VGSbfBc5hqdl3mXEGtURJ9rHQGmTWhwVnO7WqgC+XuAtLHSvkme0CNcU6yPvpSst3Zguw0yaunh3NpkfsDpfu6H8Fz+nZJ7WpHo1zcdgbnAnoZBV6oU+W0hetJI+buHLeVwm0r/heFlp36z/xy3orU6dTDLo6dxm0NqQ0k4kiCVghFSAJyipaOGhcG9Nt2jpXAsfu0Jinyfy8/kTtMJM8jIplZDp6TO+nzEicvin+AZ2+Ztl3pe/0u0OEPPn8EGABrhvj4JEOXhQAAAABJRU5ErkJggg==" alt="">
                    
                    
                        <router-link tag="span" to="/home/shujia">
                        我的书架
                        <i class="el-icon-arrow-right"></i>
                        </router-link>
                        
                        
                    
                </li>
                <li> 
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowRTlFODI2RjQ2RDYxMUU4OTJCOTg2MkQyMTQ5MUE5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowRTlFODI3MDQ2RDYxMUU4OTJCOTg2MkQyMTQ5MUE5MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBFOUU4MjZENDZENjExRTg5MkI5ODYyRDIxNDkxQTkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBFOUU4MjZFNDZENjExRTg5MkI5ODYyRDIxNDkxQTkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8Et5YgAABQRJREFUeNrMWl1oW3UUP0mzpV2TwNI11eLWj2XtFNSqtW6KDxUFn9oiG4KbgoM5Bm6IMAS3J3U+CDpxiDjBwbQT8Wv6oDBhexjuo6xu80HbrvbLbdivqU26trFr/J2bk5HGJvfcm+S2P/gRut3/+fjfe87/nHOv6/Hvj1MeEAKbwQ3gerAGLAdL5f8nwVGwH+wCz4InwZFcFXtyWFsGPgc+Az4AurJc6wWDYD34pPxbHOwEj4JHwHE7RrhtrLkdfBscBN8BG02MzwSXrGUZQ+BBsLKQDvDd2gP2gC+nPB75wArwRbBbdCzLtwPrwA7wLdBHhYNPdLCuu/LlQCt4HryPnEMDeA5sy9WBF8CvwAA5D74bX4oNthzYCX4IFtHioUhs2GnVgRbJCksFB8UmlQN3gu2LvPML3Yl2sS3rQcbp6zO7mabM66VHbwvR3cGVVOP3URB/l3o8NDk7S//EYvT7RJR+uX6dTv05QuMzM3Zigm17EPz31mGSVkrskTRmCWsDfno2XEsbQ+XkdpmfafF4nE6PjNInvX1wKmJV3SupNqY6UCkHiXr3l7vdtH19HbWuuYNcLuuHMTvy3dAVOtTVQ7G5Oe2yqJQk19Jj4FUrxq8q9tJ7G5uorWq1LeON3cO6VqxnOSzPwqO0Nz2IV4HbtBLKi4vp3Q1NxqOTD7AclsdylXhebL7lwFawRLPSW+SmNxobqKLEXNnHPb3UcvyE8WsGlsdyWb4CJWLzPAdU2F5fR7V+3c5/3jdAUzdv0hf9g6rrWS7LV2JL0gFuRu5XVXSBALUgYLWYi8eN31l9gBryWY8C3INUsgOPaev5LeEa2wFrJbBZj7KfaGYHHtJmnYdD5Y4cu6xHmZUa3dLDmuKRilDBdz/1LrA+BerZgbDmynuDQUeLn4Yylb517ECF5spqf6mjDlT5VPoq2AFVTuRCzUko9fnVY5UVHk9OBj3xw4/zy2DUUZtrqmhbXTgXfTG+A6py8AZKYssjjyxBz2fDsYGhXPVF2IFhzZU26nd6urba2OkFZzRwrq16Ta76/uL71KvJRAORSVpdai2Q+fHI9IiYYTA6qbnsMm9Pl+bKS+iknMTFcZW+brfMX0zx0/CI0YA4AaNjGx7VXNrJDvCU2NSysekZow10AqxndHra1E/wRDKIf9YIbu/tL/hdYPmsRwG2+VoyRXyqipiJCaOHLSRYPutR4GhqQ8MOTGlWfdR9mfoikYIYz3JZvgJs65FUB8bAw5qVM+iw9p2/SMNT03k1nuWxXJavwGGxed5UYr+MLEzBAfbS2Q7sWDRPOx815CkCNzlW2Z8+lSCZs7ymVcpZafeZc/Tt4B+2A5vX8frdZzoMeUq8npwJpQ+2GMvkXLD0LiAc8NNWG5M5zjbKgE3ignSQGUeLRpNAiRcalt8JJGej96D5ScxGlxtVJRdmf8di1I9HhU9Ym7NRzhz8Tq1nXveW4TUrj7K/pqUzoebIfoqz7P8q3kzpGNxFSwe7FjI+mwOMD8Ad4v1i7vwOsYWsOsA4BG4CJxbBeE6Xm8UGsusA45gEzwUHjb8k2eYb065PKZDPd/4OYq+25LAJlr0PbAJ/VbWtFoTHwDclzR6gxAcc+cIN8H2wTk7ZmLrvtqHsKiU+NaiW305NP5Ghnu8UGVWU+NTAcqmby6xkTO7EARmONctzy28Sk5/b+FICMvm5zW9y2p/UDhSy4T8BBgA8XoHNCBqvpAAAAABJRU5ErkJggg==" alt="">
                    <span>历史记录</span>
                </li>
                <li v-for="v in myData">
                    <img :src="v.img" alt="">
                    <span>{{ v.title }}</span>
                </li>
            </ul>
        </div>
        <div class="btn">
             <el-button @click="tui" type="primary">退出登录</el-button>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      myData: [
          {
              img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZGMzE2MUJFOTFEMjExRTZCOUVBRjEzNzBBMUFBOEU5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZGMzE2MUJGOTFEMjExRTZCOUVBRjEzNzBBMUFBOEU5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkYzMTYxQkM5MUQyMTFFNkI5RUFGMTM3MEExQUE4RTkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkYzMTYxQkQ5MUQyMTFFNkI5RUFGMTM3MEExQUE4RTkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7O6c4RAAAJeElEQVR42txb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',
              title:'我的账户'
          },
          {
              img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjg4NjlERDg5NTExRTZCQUQyOUM5M0ZDODdEMUE2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBDQjg4NjlFRDg5NTExRTZCQUQyOUM5M0ZDODdEMUE2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MENCODg2OUJEODk1MTFFNkJBRDI5QzkzRkM4N0QxQTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MENCODg2OUNEODk1MTFFNkJBRDI5QzkzRkM4N0QxQTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7olMVnAAAGOklEQVR42tRa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',
              title:'兑换追书劵'
          },
          {
              img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEsElEQVRogc3aX4hVVRTH8c++d1QsSxrLMR9M0dJ6cUyphMryJRP781AUWT70UJMVVCRBBYFSSi8FomFQgf17SYtAq5cUiajQcogaa4JsCO2PEjZaOOWcHva9OY1z55597p2x7+Pda6/1W2efe85a++xw4rrrNIHJuBZXYA5m4DycWRk/hl/xPfbhE+zAL40Gbmlg7iSswB2YjzCM7Ti0YjaWVH7LsAdvYDMOFxERCqzA+XgU9zp5hRvlD7yMtTiQMrGUYNuCVfgWj2ieeDgDD+CbSowxeSfmTeBCfIZnMSFVXQITKjE+wyV5JuRJ4CbsxrziupJpx6e4uZ5hvQTuwRac3QRRqUzAWxUNNRkugfuwCeUmikqlXNFwXy2DWgnciPUjoagg60VNpzBUAhfjdaf3yg+mLGq6ePDA4ATG4E0j+6QpygRR238esYMTeAhzR0tRAebi4YE/DHwTTxVfJMWv/sSJwtVXM3++MGMG55xDqURvr6ynh85O2a5d/Phj4RA4KpYkB6D81KxZ1YG1uLIRz/r7OXZMKJdjAq2tMYHx44UpU4S5c4UbbmDmTLq76e0tEmUsxmM7J1fgXPRUBppDCML11wsdHYwde+p4X59swwbZBx8U8f4npuFQdQXuwbIG5A5NdzddXcI118SVGEi5LCxcGFftyy9TPY/BQXxS9Xpno1prke3dK9u0qeZ4WLFCKNaTLCc+hSbj0kLqcpJt28YPP9QcDytXMmVKqtv5mFrCYsM3I43T3y97//3a4+PGCXffneo14NoSLi+uLD/Z7t3Dq7nqqiKrsKAk9rAjz8GDw4+HICxalOp1dgmz6po1gzE5mqz29lSvF5bQVkBOOpMn1zUJ06alem0r4awielIJ83I0dBMnpro9K6WpL06pJCxZUt8unb4S0gqSSZOSo4SlS5k+vb7hkSOprntL+DlJzOLF+W6Hqn17e6yHcpD19KRIgd9K+C5lRvbVV8KaNbGqDMO8/0IQli4VVq+mJecGYGdnihTobhH3KvPfoF1dHD4s3H+/sGyZ7L334kvqp5+i0LY2Yd68eM/nuW2qZJls585E/b5pEfdf0gJt2RLrlwsuEDo6mlKHZB99FC9CGntK4i5xlhRs+3b2708NVpvjx2UvvZQ6K8OH1T/x50lT//5b/7p1HD+eGnRoJRs3Frn6n+NA9T3wWnLU/ftlq1c3nES2eXPRruwNmtFSzpmj9PjjuUqF/9CklrK6AofwShFP9u3Tv3KlbOtW+vrq22eZ7OOP9Xd0FBVP1HqIkd5WaW2lXObIkRHbVhn8hWaVuD//f+YxAzQOLuaexxejKieNL/DcwB8GJ/AXbsPvo6UogV7cLmr8l6HK6W7chROjICovJ8Stn28HD9TqB97FgyOpKJEHRU2nMFxD84L4KfV0rsSJioYXahnU68hexC1Oz3/iKG6taKhJnpbyHSwwuk+nTnG/6u16hnl74m7xHMQT4mt8pPgTT+IyfJ1nQkpT34dnxI/ez4kHOJrFH9iAi/B0JVYuipyVqHKu+LhdLm4Op/Y1mVgSv45XVWqbVBpJYCBt4nGby8UvidXjNtW66qiTx226xC5wh8QNhaH4B1e+ORlPfMm6AAAAAElFTkSuQmCC',
              title:'VIP会员'
          },
          {
              img:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGMzIxQzMxRDg5NDExRTZBQ0E5QTFFMEFGNUJFRTQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGMzIxQzMyRDg5NDExRTZBQ0E5QTFFMEFGNUJFRTQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUYzMjFDMkZEODk0MTFFNkFDQTlBMUUwQUY1QkVFNDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUYzMjFDMzBEODk0MTFFNkFDQTlBMUUwQUY1QkVFNDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7VgmSuAAAFSklEQVR42tRaa2xURRQ+c1lrF9otLYW1VWx59GH9IdX1QaLGmqj8MGAMChF84A8Vtb4fCZhINGhjghIaQzQqhlj4oaDxhyERbaAmPEtVFNtahZa2pFDSQinVSvf6nTuz7e12X3d2292e5Mve3L1z5vvmcebM3Cvu2TFECbBZQAVwC1AKzAFmAtPU//3AGeA40AjsB2qB0/FW7Iqj7AzgEeAh4AZARHj2ciAHKAEWqXsmUA9sA7YCZ3VIGBpl8oANQCvwPuCLQj6cCVWWfbQB1UD+eArg3noVaAZesg2PRNhU4FmgSdVxWaIFFAEHgfeADBo/y1B1cF1liRKwBDgMlNPE2QLgAHBfvAKeAHYAHpp44974SnHQErAa+AiYQsmzKYrDaqcCFquokCpWrTjFJOAaoCbJLR+qJ2oUt4gCOHxtH+dIE8+c2B4cYoMFvABc59Tz1ZlEd8wWdKNX0LQIETwzDblGnqC7CwTNm64lgrm9OGo1tOVC+WohcdT6q64V9GCJGF6KB+Fu1wmTPj9m0sX/5D0Wxc8tKhTksjXZl80mffqb6VTEBZWSdAb3wBqn5L1YP5eB/CU/UV2HSUe70b/wuHieoOoKw/p/FrAJ1/fOhUio/Pm0ST+0mZbQpcXCekZjKK0NTuZygcedesp1y9/j54jWHzCt/KwAK8ZrPsMaIusWGlbGdiWqbOklqjrkp/Y+New8goqmSx9dFx2LWAW8CXQHemAl4Hbq5STIcOvPzSKLOFvreQio81Mbfudkyf/4udfrRsgXeuR9LnuyT2suuBXn4R5YqePl/CDRbgwHHttVtxrU/Y8tO7NN5qmopeq2kdGam464iOH0HeYK+9C0FcBGl9qMXK/r5ZOjJpXmCKtVs9PDbBzcEnY7gR76zPkEthvvQfJZwJ2a+bwMCYg0r+zxU57D5PpUvywbhzHnChZws07pMuzHnis3hifyKFEYFjWNJn3fKlv4LsT9FaWCMtLGPnt2AFGqwU+/a+3HyOdSe1jH9swCwxo2IeMcxv/z5YIOd0kBfO0ywj9biYZ4ardfh0YJC5ivU/KKKPGbCWeljVxHsplu7WFUxK69NHnNywIyJ7GATEO35GAMQ9ZUiGZD+tF0kAVorYUHT0WuleN8xwUJvo5k+zq1FfTxJO7SGUabGkz6FcnbjPTQa8PedtNKFdh4nbj9KmFFnDFhFKv3nnZtAT0soEUnEnkQYYqziXJCCOA0uqkHQnrVTMMiV5I9Or0YXqUh4AiasOdfLQF/soBG23FfzPayT5DPG34BX5gv6NFdsgveRZ7kSQvvazb6f81PWr3Q5FLnL85XkGwRtYcCuX4k8mzFli8tAfU8iWt1ShuCEmaarpjzj4aaxEcm4RrAnDsD68AXOvKTbNvse2IWMOCk9F+9ZtQ0+8yARLS0+e9zjskz1632HRkiOm0Bno7Vw4Z6kx4rC72JGbhEtLPFpH5FfN0+P90/X5A7xOuUHoRRPsFwaFsU5/iPVZJgYY9V+MZbk2Dyvh0gH+pkbiPQkMLkmdsHo8J50AM8apfxgUMKkuekc7niGFaAlV8AD3OWm0Lkh9TRT/OYBTVMgW+ByhQSUKk4UawC2DYDTya5J4YUh81hU5ooDj4GliZpTnC4fEBxIF0BbN+QfCE9kdHpF3Ve9XXUpDLWjQPJ7yDWOk05NFKEN4CbgGMxZcVONtDAOyRfenMs7k8gcT5g/5C3BsB6VRclWkDAOkh+alCofus1k9PAxx7so4DkpwbtjvcSCfrchg/HKtS45TeJgc9tMmwTMvC5zR9qF1ir9iJx2f8CDACtIFuQwiyHugAAAABJRU5ErkJggg==',
              title:'每日签到'
          }
      ],
      iid: "",
      
    };
  },
  components:{
      
  },
  computed: {
    userName(){
        return this.$store.state.username
    },
    
  },
  
  mounted() {},
  methods: {
      tui(){
        this.$store.commit('setUser',false);
        this.$router.push('/home/login'); // 页面加载时跳转
    }
  },
  created() {
   if(!this.$store.state.user){
      this.$router.push('/home/login'); // 页面加载时跳转
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  width: 100%;
  height: 100%;
}
.list-box{
    width: 100%;
    ul{
        width: 100%;
        li{
            height: 45px;
            width: 100%;
            padding: 0 0 0 17px;
            line-height: 45px;
            i{
                float: right;
                line-height: 45px;
                margin-right: 15px;
                font-size: 20px;
                color: #666;
            }
            img{
                float: left;
                width: 29px;
                height: 29px;
                padding: 8px 0;
                box-sizing: content-box;
            }
            span{
                // width: 100%;
                display: block;
                margin-left: 40px;
                border-bottom: 1px solid #dfdfdf;
                // line-height: 45px;
            }
        }
    }
}
.btn{
    width: 100%;
    padding: 20px 20px;
    .el-button--primary{
        background-color: #b93321;
        border: 1px solid #b93321;
        width: 100%;
    }
}
.user-box{
    width: 100%;
    height: 150px;
        background: rgba(40,40,40,.9);
        position: relative;
        text-align: center;
        .username-box{
            width: 100%;

            position: absolute;
            bottom: 10px;
            text-align: center;
            .username{
            // position: absolute;
            // bottom: 10px;
            // left: 50%;
            // display: inline-block;
            // margin-top: 100px;
            color: #fff;
        }
        }
        
        .img-box{
            width: 75px;
            height: 75px;
            border-radius: 50%;
            text-align: center;
            line-height: 75px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -37px;
            margin-left: -37px;
            background-color: #fff;
            span{
                font-size: 20px;
                font-weight: 600;
            }

        }

}

.header1 {
  width: 100%;
  height: 44px;
  background-color: #b93321;
  color: #fff;
  text-align: center;
  line-height: 44px;
  h2 {
    display: inline-block;
    font-size: 14px;
    line-height: 44px;
  }
  .head-left {
    float: left;
    width: 60px;
    height: 44px;
    position: relative;
    // line-height: 44px;
    i {
      font-size: 23px;
      color: #fff;
      line-height: 44px;
      position: absolute;
      left: 5px;
      font-weight: 500;
    }
    span {
      // position: relative;
      // top: -3px;
      font-size: 12px;
      line-height: 44px;
      position: absolute;
      left: 26px;
      top: -1px;
    }
  }
  .head-right {
    float: right;
    width: 60px;
    height: 44px;
    text-align: center;
    line-height: 49px;
    i {
      width: 20px;
      height: 20px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAC5UlEQVR4Xu2a0XHbMAyGgcp3vd6llnlnv3cEd4ImG8QT1J4gyQbZoO4EUSZINkg6QT1C3q0eLbePdtCTnaSuI8UkRFK6E/xMUMBH8AcEC6HlP2x5/CAAJANaTkCuQMsTQESw1iuQZtlVnoH9OJ7UlYm1ANCaemvMg8fTbeB0G1E8UQoXoUEEB5AHv8LsDgGHu8ES0KxD8UloCEEBaP1nuMbVHQD2ik+aFhF1TpQ6moXKhGAAUr08BXzM074k+OeQaUEUjQbq430ICEEApHo5BqSN4Bn/CCd91U2M1zMXegewUXqCMcc/QpgO4viCY2tq4w3ARunfLb9xg38JACGJHrsXvsTRC4AypTc9lf11PiuEcwBPSn8DgJ+4AZdUiIeIOiPXFcIpAHOl56JxXyGcAWApPZuDuwrhBEAVpeczcFMhKgF43dNzw2HaOagQbACulZ6JAKpWCBaAwz09NxyuHbErhDUA/0rPhsB6h7AC8CvLzohgynUxiJ3lO4QxgDqUng0MITGdMh0E8KT0eWd3zHaoFkOzKdObAHKxW+Hqan96U0s8jIduK8T7kVIfHsrMSwHM9e9jxHV+8gcGGAzPgpq8PWUqBNC8MleVWDmEQgCpzqaAcFb1sY2yJ/jeV/H5vk8CoOiUtldg/bNRJ1jRmYiiz0WzhFIR3ECA9ZiA/pvf534gwBAQ44o+uTUnygjg1TgdAWcRREnZIOVgH1Dk5Vwv7hHxi9sIqu1GRD8GqmfdqwgADnfJALkCogEiglIFbMtgSZ0uEmFOn9H4MmjjIKfK2Oy/Cz1YH2DjoABglFkbwJIBOwTkCoRqhW1SVDRANMC+1bbJMBFBEcF/BFhVINVZAghfrQSU4LqvYqPP5XzvX/kKsD6HIRz1VffWBNr2H2i6MVn7ssZi/8oA8g3mOrtEoPODw9HNSxBOByq+tAnI9/7PvrCugE0gTV8rAJp+Qr79kwzwTbjp+0sGNP2EfPvX+gz4C7tCBl+8koA6AAAAAElFTkSuQmCC);
      background-size: cover;
      display: inline-block;
      line-height: 44px;
    }
  }
}
</style>

