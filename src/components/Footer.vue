<template>
  <footer>
    <div class="container">
      <div class="footer-wrapper">
        <div class="left">
          <router-link :to="{name: 'home'}" class="header">Portfolio Blogs</router-link>
          <ul>
            <li>
              <a href="#">
                <github class="svg-icon"/>
              </a>
              <a href="#">
                <linkedin class="svg-icon"/>
              </a>
              <a href="#">
                <facebook class="svg-icon"/>
              </a>
              <a href="#">
                <instagram class="svg-icon"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="right">
          <li>
            <a href="#">
              <img src="../../src/assets/images/ozzylogo.png" alt="">
            </a>
          </li>
          <div class="">
            <p>Copyright 2023 All Rights reserved by CodeGuruOzzy</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import github from '../assets/images/github-142-svgrepo-com.svg'
import linkedin from '../assets/images/linkedin-svgrepo-com.svg'
import facebook from '../assets/images/facebook-3-logo-svgrepo-com.svg'
import instagram from '../assets/images/instagram-1-svgrepo-com.svg'
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 40px 25px;
  background-color: #474545;
  .container {
    display: flex;
    align-items: center;
    gap:32px;

    .footer-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex:1;
      width: 100%;

      @media (max-width: 768px) {
      flex-direction: column;
      gap:20px;
    }
      .left {
        display: flex;
        flex:2;
        gap:30px;
        .header {
          flex:1;
          font-size: 24px;
          color:var(--white);
          text-decoration: none;
          cursor: pointer;
          transition: 0.3 color ease-in;

          &:hover {
            color:var(--primary)
          }
        }
        ul {
          flex:1;
          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap:16px;
            
            
            .svg-icon {
              width: 36px;
              height: 36px;
              margin-right: 10px;
              color:var(--white);
              
              
            }
          }
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        img {
          border-radius: 10%;
          cursor: pointer;
          width: 240px;
          
          @media (max-width: 768px) {
          text-align:center;
          width: 200px;
        }
        
    }
        li {
          list-style-type: none;
        }
        p {
          font-size: 16px;
          color: var(--white);
          margin-top: 10px;
        }
      }
    }
  }
}
</style>